import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';

const AboutTabs = () => {
  return (
      <>
      <br /><br />
      <div className="container">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
      <Tab eventKey="home" title="About Mixtas">
        <div className="row">
          <div className="aboutUsImg col-lg-6">
          </div>
          <div className="px-5 col-lg-6">
            <br /><br /><br />
            <h1>Unveiling Your Unique Fashion Journey</h1>
            <br /><br />
            <p>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing - it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.</p>
            <br /><br /><br />
          </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Our Story">
        <div className="container-fluid px-5">
        <p className='text-secondary'>
        In the heart of London, a dream was woven into the fabric of reality - the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to Mixtas, where every stitch tells a story.
        <br /><br />
        Founded 2023, Mixtas emerged from a passion for clothing and a commitment to providing a curated collection that transcends mere fashion trends. Our journey began with the belief that clothing is not just about covering the body; it's a canvas for self-expression, an art form that reflects individuality. <br /><br />

        What sets us apart is our dedication to offering more than just garments - we curate experiences. From the luxurious touch of premium fabrics to the meticulous craftsmanship of each design, every piece at Mixtas is a testament to our commitment to quality and style. Our curated selection embraces the essence of contemporary trends while celebrating the enduring charm of timeless classics. <br /><br />

        At Mixtas, we understand that fashion is more than a fleeting moment; it's an ongoing narrative. Our collections are thoughtfully curated to tell stories that resonate with diverse tastes, preferences, and lifestyles. We believe in empowering our customers to embrace their unique identities through the choices they make in our store. <br /><br />

        Beyond the racks of clothing, Mixtas is a community - a gathering place for fashion enthusiasts to connect, explore, and celebrate the art of dressing well. Our team is passionate about assisting you in creating looks that speak volumes and stand the test of time. <br />
<br />
        As we continue to evolve, our commitment remains unwavering - to inspire confidence, foster self-expression, and redefine the way you experience fashion. Thank you for being a part of our story, and we look forward to helping you script your own fashion narrative at Mixtas.” <br />
<br />
        Feel free to customize the details to align with your store's unique history and vision.
        </p>
        </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Our Mission">
        <div className="container px-5">
          <p className='text-secondary'>
            At Mixtas, we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality
            <br /><br />
            <ol>
              <li>
              Curate Exceptional Style: We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.</li><br />
              <li>Quality Craftsmanship: We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.</li><br />
              <li> Celebrate Diversity: Fashion is a universal language, and we celebrate the diversity of styles and tastes. Our mission is to provide a space where individuals from all walks of life can find clothing that aligns with their unique identity and personal expression.</li><br />
             <li> Customer Empowerment: We strive to empower our customers to embrace their individuality with confidence. Our team is committed to providing personalized assistance, style advice, and a seamless shopping experience that goes beyond transactions to create lasting connections.</li><br />
              <li>Sustainable Choices: As stewards of the environment, we are dedicated to making sustainable choices in our business practices. We actively seek eco-friendly materials, ethical manufacturing processes, and sustainable packaging options to contribute to a more conscious and responsible fashion industry.
              </li><br />
              <li> Community Engagement: [Your Store Name] is more than just a place to shop; it’s a community. Our mission extends beyond fashion to create a space where like-minded individuals can connect, share inspiration, and foster a sense of belonging.
              </li><br />
              <li> Innovation and Adaptability: In a dynamic and ever-changing fashion landscape, we embrace innovation and adaptability. Our mission is to stay ahead of the curve, offering the latest trends and technological advancements that enhance the overall shopping experience
              </li><br />
            </ol>
            At Mixtas, our mission is not just about selling clothes; it's about fostering a culture of confidence, creativity, and self-expression. Join us on this journey as we continue to redefine the way you experience fashion.”<br /><br />
            
            Feel free to modify the mission statement to align with the specific values and goals of your clothing store.
          </p>

        </div>
      </Tab>
      <Tab eventKey="contact" title="Connect With Us">
        <div className="container">
          <br /><br />
          <h1>Affilate Program</h1>
          <br /><br />
          <ul>
            <li>Build your own online sporting goods store!</li><br />
            <li>If you have a web site, you can make money selling sporting goods products. It's easy and it's free to join.</li><br />
            <li><a href="#">Click here</a> to join now and earn commissions of up to 6%</li><br />
          </ul>
          <br /><br /><br /><br />
        </div>
      </Tab>
    </Tabs>
      </div>
      </>
  )
}

export default AboutTabs