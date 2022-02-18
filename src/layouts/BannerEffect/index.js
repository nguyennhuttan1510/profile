import React from "react";

const BannerEffect = (props) => {
  const { handleClickViewCV } = props;
  return (
    <div className="banner">
      <div className="container positionblock">
        <div className="row">
          <div className="col-md-7 col-9 offset-md-5 text-md-right card-title">
            <div className="slide-title" />
            <div className="slide-title" />
            <div className="title mb-lg-4">Hi! There, I'am Developer</div>
            <div className="litle-text mb-lg-5 mb-3">
              Creation, persistence, learning, oriented to customer needs.
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                handleClickViewCV();
              }}
            >
              View CV
            </button>
          </div>
        </div>
      </div>
      {/* background orange */}
      <div className="background" />
      {/* -----------------------------eff-end-------------------------------------------- */}
      <div className="wrap-end">
        <div className="layout1-end block-end" />
        <div className="layout2-end block-end" />
        <div className="layout3-end block-end" />
        <div className="layout4-end block-end" />
        <div className="layout5-end block-end" />
      </div>
      {/* ---------------------------eff-content--------------------------------------- */}
      <div className="background1" />
      <div className="wrap">
        <div className="square-small">
          <div className="child square-left" />
          <div className="child square-right" />
        </div>
        {/* đường viền */}
        <div className="wrap-circle3">
          <div className="circle circle-1-3" />
          <div className="circle circle-2-3" />
          <div className="circle mask3" />
        </div>
        {/* vòng tròn 1 */}
        <div className="wrap-circle">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle mask" />
        </div>
        {/* vòng tròn 2 */}
        <div className="wrap-circle1">
          <div className="circle circle-1-1" />
          <div className="circle circle-2-1" />
          <div className="circle mask1" />
        </div>
        {/* vòng tròn 3 */}
        <div className="wrap-circle2">
          <div className="circle circle-1-2" />
          <div className="circle circle-2-2" />
          <div className="circle mask2" />
        </div>
        {/* logo-avatar */}
        <div className="nen" />
        <div className="matsau" />
        <div className="mattruoc" />
        {/* hết logo-avatar */}
      </div>
      {/* ------------------------------------eff-layout------------------------------------- */}
      <div className="layout1 block" />
      <div className="layout2 block" />
      <div className="layout3 block" />
      <div className="layout4 block" />
      <div className="layout5 block" />
      <div className="layout6 block" />
      {/* eff-layout and text */}
      <div className="layout7 block">
        <div>get start</div>
      </div>
      <div className="layout8 block">
        <div>get start</div>
      </div>
    </div>
  );
};

export default BannerEffect;
