import React from "react"
import Container from "./Container"

const Testimonial = () => {
  return (
    <Container headerTitle="What people say on Fiverr?">
      <div className="grid text-1sm grid-cols-1 md:grid-cols-3 p-4 gap-2 text-justify">
        <div className="bg-white p-3 rounded-md">
          <p>
            "Great to work with, once again! He even improved our already
            established website and made it more interactive on top of what we
            requested for the gig. He is always responsive and basically part of
            the team. We would recommend to anyone."
          </p>
          <div className="text-gray-700 italic mt-2">cavortmedia555, USA</div>
        </div>
        <div className="bg-white p-3 rounded-md">
          <p>
            "Working with this seller was a truly amazing experience. After
            searching through many sellers on Fiverr, this seller was the only
            one to contact me back and spend the time to even see if my project
            was possible. After he concluded it was possible, he had everything
            done in a matter of days. He was also very transparent about what
            was feasible and what wasn't. I would highly recommend him to anyone
            – especially those struggling to find a seller with great
            communication and dedication to his work and his customers."
          </p>
          <div className="text-gray-700 italic mt-2">ecamediapub, USA</div>
        </div>
        <div className="bg-white p-3 rounded-md">
          <p>
            "Excellent service and work with patient! Is really happy to work
            with him! Is good that he keep updating on the progress, showing the
            result based on requirements with expectation! Really recommended
            and will work with him again in the future!"
          </p>
          <div className="text-gray-700 italic mt-2">tommyc241, Malaysia</div>
        </div>
      </div>
    </Container>
  )
}

export default Testimonial
