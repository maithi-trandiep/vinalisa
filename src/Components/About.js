import React from 'react';

export default function About({ id }) {
  return (
    <div className="container page-section section-about" id={id}>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">À propos</h2>
      </div>
      <div className="row">
        <div className="row">
            <div className="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet.</p>

                <p>Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae.</p>

                <p>Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie.</p>

                <p>Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada.</p>
            </div>
            <div className="col-md-6">
                <img src="/assets/img/raisin_field.jpg" className="about-image" alt="img" />
            </div>
        </div>
      </div>
    </div>
  );
}
