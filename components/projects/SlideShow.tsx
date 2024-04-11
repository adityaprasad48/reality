import EdgeSlide from "../slideshows/EdgeSlide";
import SimpleImageSlider from "../slideshows/SimpleImageSlider";

const SlideShow = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <SimpleImageSlider />
      <EdgeSlide />
    </div>
  );
};

export default SlideShow;
