import SliderButton from "../components/SliderButton";
import BannerImage from "./BannerImage";
export default function Banner({ data }) {

  let sliderBtn = [];
  let bannerImg = [];
  let i = 0;
  data.map((banner) => {
    let cls = i === 0 ? "active" : "";
    sliderBtn.push(
      <button
        type="button"
        key={i}
        data-bs-target="#carouselBanner"
        data-bs-slide-to={i}
        className={cls}
        aria-current="true"
        aria-label={`Slide ${i}`}
      ></button>
    );

    bannerImg.push(
      <BannerImage
        key={i}
        imageInfo={{
          heading: banner.heading,
          short_description: banner.short_description,
          page_url: banner.page_url,
          more_button_text: banner.more_button_text,
          active: cls
        }}
      />
    );

    i++;
  });

  return (
    <>
      <div id="bannerslider">
        <div
          id="carouselBanner"
          className="spotlight position-relative carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators mb-0">{sliderBtn}</div>
          <div className="carousel-inner banner-slider">{bannerImg}</div>
        </div>
      </div>
    </>
  );
}
