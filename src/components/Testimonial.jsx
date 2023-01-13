import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Vishu"}
          feedback={"You are humble and Calm ,Passionate to your work."}
        />

        <TestimonialCard
          name={"John"}
          feedback={
            "Wow what a portfolio, doesn't expected this."
          }
        />

        <TestimonialCard
          name={"Steve"}
          feedback={"Amazing seems like you should be the Apple next CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;