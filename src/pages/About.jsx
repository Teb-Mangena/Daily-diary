import "../styles/About.css";

const About = () => {
  return (
    <div className="about-us">
      <h2>About me</h2>
      <div className="about-us-info">
        <div className="my-image">
          <img src="images/Mangena-T.jpg" alt="Mangena Tebatso" />
        </div>
        <div className="about-me-info">
          <h2>Hi!!</h2>
          <p>My name is Tebatso Mangena and im willing to make every person's life a secret</p>
          <p>
            I created Daily Diary, a secure online journaling platform, because
            I wanted to provide a safe space for everyone to reflect, express
            themselves, and stay organized.
          </p>
          <p>
            Luckily, this website allows users to write their own private
            diaries, encrypted and protected from unauthorized access. Only you
            can access your diary, giving you complete control over your
            thoughts, feelings, and memories.
          </p>
          <p>
            All user data is highly protected using end-to-end encryption,
            ensuring that your entries remain confidential and secure. Daily
            Diary's top priority is safeguarding your privacy, so you can focus
            on writing without worrying about your secrets being exposed.
          </p>
          <p>With Daily Diary, you can:</p>
          <ul>
            <li>Write and reflect on your daily experiences</li>
            <li>Set reminders and notifications to stay organized</li>
            <li>
              Customize your diary with personalized backgrounds and fonts
            </li>
            <li>Access your diary from anywhere, at any time</li>
          </ul>
          <p>
            Join the Daily Diary community today and start writing your story!
          </p>

          <h2>Contact Me</h2>
          <p>
            If you have any questions, suggestions, or just want to say hello,
            feel free to reach out to me:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:tebatsomangena8@gmail.com">
                tebatsomangena8@gmail.com
              </a>
            </li>
            <li>
              WhatsApp: <a href="tel:+27649494191">064 949 4191</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
