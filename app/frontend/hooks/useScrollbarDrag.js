import { useEffect } from "react";

/**
 * Hook pour ajouter la fonctionnalité drag/swipe à un scroller horizontal
 * Fonctionne sur le scroller lui-même et synchronise le thumb du scrollbar custom
 */
export const useScrollbarDrag = (scrollerRef, thumbRef) => {
  useEffect(() => {
    const scroller = scrollerRef?.current;
    if (!scroller) return;

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let animationFrameId = null;

    // Mise à jour du thumb position/width basée sur le scroll (optimisé avec RAF)
    const updateThumb = () => {
      if (!thumbRef?.current) return;

      const thumb = thumbRef.current;
      const scrollLeft = scroller.scrollLeft;
      const scrollWidth = scroller.scrollWidth;
      const clientWidth = scroller.clientWidth;
      const scrollTrackWidth = thumb.parentElement.clientWidth;
      
      if (scrollWidth === clientWidth) return;
      
      const thumbWidth = (clientWidth / scrollWidth) * scrollTrackWidth;
      const thumbLeft = (scrollLeft / (scrollWidth - clientWidth)) * (scrollTrackWidth - thumbWidth);

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.transform = `translateX(${thumbLeft}px)`;
    };

    // Debounce thumb update pour éviter le jank
    const scheduleThumbUpdate = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateThumb);
    };

    // Gestion du drag sur le scroller
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = scroller.scrollLeft;
      scroller.style.cursor = "grabbing";
      scroller.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      const sensitivity = 1.5;
      scroller.scrollLeft = startScrollLeft - deltaX * sensitivity;
      scheduleThumbUpdate();
    };

    const handleMouseUp = () => {
      isDragging = false;
      scroller.style.cursor = "grab";
      scroller.style.userSelect = "auto";
    };

    // Touch support pour mobile
    const handleTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      startScrollLeft = scroller.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      
      const deltaX = e.touches[0].clientX - startX;
      const sensitivity = 1.5;
      scroller.scrollLeft = startScrollLeft - deltaX * sensitivity;
      scheduleThumbUpdate();
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Event listeners - passive: true pour les scroll/touch (meilleure perf mobile)
    scroller.addEventListener("scroll", scheduleThumbUpdate, { passive: true });
    scroller.addEventListener("mousedown", handleMouseDown, { passive: true });
    scroller.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Init
    scroller.style.cursor = "grab";
    updateThumb();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      scroller.removeEventListener("scroll", scheduleThumbUpdate);
      scroller.removeEventListener("mousedown", handleMouseDown);
      scroller.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollerRef, thumbRef]);
};
