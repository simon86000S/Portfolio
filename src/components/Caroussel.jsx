import { useSpringCarousel } from "react-spring-carousel";

const Caroussel=()=> {
  const {carouselFragment,slideToPrevItem, slideToNextItem,
  } = useSpringCarousel({
    initialActiveItem: 2,

    items: mockedItems.map((i) => ({
      id: i.id,

      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });

  return (
    <div>
      <button onClick={slideToPrevItem}>Prev item</button>

      {carouselFragment}

      <button onClick={slideToNextItem}>Next item</button>
    </div>
  );
}
export default Caroussel;
