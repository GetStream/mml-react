### Naked Components

> Very basic pieces of UI typically beyond a matter of styling

- `Row`
- `Col`
- `Scroller`

### Container Components

> Always host other components, can be themable

- `Card`
- `CardHeader`
- `CardBody`

### Core Components

> Basic components that can be composed and themed

- `Text`: a block of text
- `Button`:
- `Image`: a simple responsive image
- `Input`: an input field
- `MD`: renders markdown
- `Icon`: simply displays an ico from material design icons
- `Loader`: signals a _loading_ temporary state with a circular spinner
- `Error`: display an _error_ message
- `Success`: display a _success_ message

### Structured Components

> More complex components composed of other components, certainly themable

- `AddToCalendar`: wrapped in a `Card`
- `Scheduler`: wrapped in a `Card`
- `ButtonList`: a list of `Button`
- `Carousel`: a series of `CarouselSlide` typically contianing `Img`, `Text` and `Button`
- `Number`: input spinner composed of two `Button` and a counter
