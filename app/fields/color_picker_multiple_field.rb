# Champ personnalisé Administrate pour sélectionner plusieurs couleurs avec un color picker
require "administrate/field/base"

module Administrate
  module Field
    class ColorPickerMultipleField < Administrate::Field::Base
      def to_s
        data.is_a?(Array) ? data.join(", ") : data.to_s
      end

      # Forcer l'utilisation du partial custom
      def to_partial_path
        "/fields/color_picker_multiple_field/show"
      end
    end
  end
end
