import { KeenSlider,} from 'Keenslider';

export default function AnimateEnter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <script type="module">
    import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm'
  
    const keenSlider = new KeenSlider(
      '#keen-slider',
      {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      },
      []
    )
  
    const keenSliderPrevious = document.getElementById('keen-slider-previous')
    const keenSliderNext = document.getElementById('keen-slider-next')
  
    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop')
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop')
  
    keenSliderPrevious.addEventListener('click', () => keenSlider.prev())
    keenSliderNext.addEventListener('click', () => keenSlider.next())
  
    keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev())
    keenSliderNextDesktop.addEventListener('click', () => keenSlider.next())
  </script>
  );
}