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

    // Mise à jour du thumb position/width basée sur le scroll
    const updateThumb = () => {
      if (!thumbRef?.current) return;

      const thumb = thumbRef.current;
      const scrollLeft = scroller.scrollLeft;
      const scrollWidth = scroller.scrollWidth;
      const clientWidth = scroller.clientWidth;
      const scrollTrackWidth = thumb.parentElement.clientWidth;
      
      if (scrollWidth === clientWidth) return; // Pas besoin de scrollbar
      
      const thumbWidth = (clientWidth / scrollWidth) * scrollTrackWidth;
      const thumbLeft = (scrollLeft / (scrollWidth - clientWidth)) * (scrollTrackWidth - thumbWidth);

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.transform = `translateX(${thumbLeft}px)`;
    };

    // Gestion du drag sur le scroller
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = scroller.scrollLeft;
      scroller.style.cursor = "grabbing";
      scroller.style.userSelect = "none";
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      const sensitivity = 1.5; // Augmente la sensibilité du drag
      scroller.scrollLeft = startScrollLeft - deltaX * sensitivity;
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
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Event listeners avec passive: false pour preventDefault
    scroller.addEventListener("scroll", updateThumb);
    scroller.addEventListener("mousedown", handleMouseDown, { passive: false });
    scroller.addEventListener("touchstart", handleTouchStart, { passive: false });
    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    // Init
    scroller.style.cursor = "grab";
    updateThumb();

    return () => {
      scroller.removeEventListener("scroll", updateThumb);
      scroller.removeEventListener("mousedown", handleMouseDown);
      scroller.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollerRef, thumbRef]);
};
