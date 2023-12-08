
  

  

  

![react-stars](http://i.imgur.com/VDbzbqF.gif)

  

  

  

###  Get started quickly

  

  

  

######  Install react-stars package with NPM:

  

  

  

`npm install @stack-pulse/react-star-rating --save`

`yarn add @stack-pulse/react-star-rating`

  

  

  

Then in your project include the component:

  

  

  

```javascript

  

	import  ReactStars  from  "@stack-pulse/react-star-rating";

	<ReactStars
		count={5}
		onChange={ratingChanged}
		size={40}
		activeColor="#ffd700"
	/>
	
  

  

```

  

  

  

Or use other elements as icons:

  

  

  

> We do not support CSS for other third party libraries like fontawesome in this case. So you must import it by urself.

  

  

  

![react-stars-fa](https://i.imgur.com/ko9NNRH.gif)

  

  

  

```javascript

  

import  ReactStars  from  "@stack-pulse/react-star-rating";

  

<ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  isHalf={true}
  emptyIcon={<i  className="far fa-star"></i>}
  halfIcon={<i  className="fa fa-star-half-alt"></i>}
  filledIcon={<i  className="fa fa-star"></i>}
  activeColor="#ffd700"
/>

  

```

  

  

  

###  API

  

  

  

This a list of props that you can pass down to the component:

  

  

  

| Property | Description | Default value | type |

  

  

| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |

  

  

| `classNames` | Name of parent classes | `null` | string |

  

  

| `count` | How many total stars you want | 5 | number |

  

  

| `value` | Set rating value | 0 | number |

  

  

| `char` | Which character you want to use as a star | ★ | string |

  

  

| `color` | Color of inactive star (this supports any CSS valid value) | `gray` | string |

  

  

| `activeColor` | Color of selected or active star | `#ffd700` | string |

  

  

| `size` | Size of stars (in px) | `15px` | string |

  

  

| `edit` | Should you be able to select rating or just see rating (for reusability) | `true` | boolean |

  

  

| `isHalf` | Should component use half stars, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars | `true` | boolean |

  

  

| `emptyIcon` | Use your own elements as empty icons | `null` | element |

  

  

| `halfIcon` | Use your own elements as half filled icons | `null` | element |

  

  

| `filledIcon` | Use your own elements as filled icons | `null` | element |

  

  

| `a11y` | Should component be accessible and controlled via keyboard (arrow keys and numbers) | `true` | boolean |

  

  

| `onChange(new_rating)` | Will be invoked any time the rating is changed | `null` | function |