import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  ingredient: PropTypes.object,
  deleteIngredinet: PropTypes.func
});