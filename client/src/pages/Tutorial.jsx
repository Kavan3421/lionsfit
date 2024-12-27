import React from "react";

const Tutorial = () => {
  return (
    <section class="tutorial-section">
      <div class="container">
        <h2 class="section-title">Tutorials</h2>
        <div class="tutorial-list">
          <div class="tutorial-item">
            <div class="tutorial-thumbnail">
              <img
                src="https://www.picmaker.com/templates/_next/image?url=https%3A%2F%2Fstatic.picmaker.com%2Fscene-prebuilts%2Fthumbnails%2FYT-0140.png&w=1920&q=75"
                alt="Tutorial Thumbnail"
              />
            </div>
            <div class="tutorial-content">
              <h3 class="tutorial-title">How to get faster results</h3>
              <p class="tutorial-description">
                Brief description of the tutorial to give an overview of the
                content.
              </p>
              <a href="#faster-gym-results" class="btn btn-primary">View Tutorial</a>
            </div>
          </div>
        </div>

        <div id="faster-gym-results" class="tutorial-details">
          <h3>How to Get Faster Results in the Gym</h3>
          <ul>
            <li>
              <strong>Focus on Compound Exercises:</strong> Prioritize exercises
              like squats, deadlifts, and bench presses to work multiple muscle
              groups.
            </li>
            <li>
              <strong>Maintain Proper Nutrition:</strong> Ensure you consume
              enough protein and maintain a calorie balance suited to your
              goals.
            </li>
            <li>
              <strong>Track Your Progress:</strong> Keep a log of your workouts
              and gradually increase the intensity.
            </li>
            <li>
              <strong>Incorporate Rest and Recovery:</strong> Give your muscles
              time to recover with rest days and quality sleep.
            </li>
            <li>
              <strong>Stay Consistent:</strong> Commit to a regular workout
              schedule and stick to it.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
