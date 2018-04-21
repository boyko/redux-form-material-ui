import MuiReactSelectAutocomplete from './MuiReactSelectAutocompleteStyled';
import createComponent from '../createComponent';
import mapError from '../mapError';

export default createComponent(MuiReactSelectAutocomplete, ({
                                                              defaultValue,
                                                              ...props
                                                            }) => ({
  ...mapError(props),
}));
