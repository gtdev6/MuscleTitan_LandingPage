const workoutContainers = document.querySelectorAll('.workout-item');
const overlayContainer = document.querySelector('.overlay-container');
const closeOverlayButton = document.querySelector('#close-icon');

function generateMarkup(title, workout){
    const items = workout.map(set =>{
        return `<li>${set}</li>`;
    }).join();
    return `
    <div id="workout-plan">
        <h1>${title}</h1>
        <ul>
        ${items}
        </ul>
    </div>
    `;
}

workoutContainers.forEach((workoutItem) => {
    workoutItem.addEventListener('click', (event) => {
        let currentElement = event.target.parentElement;
      if(currentElement != null){
        while (!currentElement.classList.contains('workout-item')) {
            currentElement = currentElement.parentElement;
        }
        if (currentElement.classList.contains('workout-item')) {
            renderWorkoutPlan(currentElement);
        }
      
    
        }
        else if(currentElement == null && event.target.classList.contains('workout-item')){
            renderWorkoutPlan(currentElement);
        }
    });
});

function renderWorkoutPlan(currentElement) {
    const markup = handleContainer(currentElement);
    if (markup) {
        const targetElement = document.getElementById('close-overlay');
        targetElement.insertAdjacentHTML('afterend', `${markup}`);
        overlayContainer.style.visibility = "visible";
    }
}


function handleContainer(containerElement){
    if(!containerElement) return;
    switch(containerElement.id){
        case "beginnerFullBodyWorkout":{
            const title = "Beginner Full Body Workout";
            const exercise = [
                'Barbell back squats, 3 sets of (8 – 12)',
                'Pull-ups/chin-ups (use assistance if necessary – machine or bands) – 3 sets of (8 – 12)',
                'Overhead Press (seated or standing, dumbbell or barbell), 3 sets of (8 – 12)',
                'Dumbbell single arm row, 3 sets of (8 – 12)',
                'Bench press (dumbbell or barbell), 3 sets of (8 – 12)'
            ];
            const markup = generateMarkup(title, exercise);
            return markup;
        }
        break;
        case "calisthenicsWorkout":{
            const title = "Calisthenics for Strength and Endurance";
            const calisthenicsForStrengthAndEndurance = [
                "Session 1: Upper Body Focus",
                "Push-Ups - 3 sets x max reps",
                "Pull-Ups - 3 sets x max reps",
                "Dips - 3 sets x 12-15 reps",
                "Bodyweight Rows - 3 sets x 12-15 reps",
                "Plank Variations - 3 sets x 1 minute each",
                "Rest - 1 minute between sets",
              
                "Session 2: Lower Body Focus",
                "Bodyweight Squats - 3 sets x 20 reps",
                "Lunges - 3 sets x 15 reps per leg",
                "Pistol Squats (or progression) - 3 sets x 8-10 reps per leg",
                "Calf Raises - 3 sets x 20 reps",
                "Hollow Body Hold - 3 sets x 30 seconds",
                "Rest - 1 minute between sets",
              
                "Session 3: Full Body Circuit",
                "Burpees - 3 sets x 15 reps",
                "Hanging Leg Raises - 3 sets x 12-15 reps",
                "Push-Up to Side Plank - 3 sets x 10 reps each side",
                "Bodyweight Squats - 3 sets x 20 reps",
                "Pull-Ups - 3 sets x max reps",
                "Rest - 1 minute between sets",
              
                "Session 4: Core Strength",
                "Plank - 4 sets x 1 minute",
                "Russian Twists - 3 sets x 20 reps (10 per side)",
                "Hollow Body Rocks - 3 sets x 15 reps",
                "L-Sit Progression - 3 sets x max hold",
                "Mountain Climbers - 3 sets x 20 reps",
                "Rest - 1 minute between sets",
              
                "Session 5: Endurance Challenge",
                "Jumping Jacks - 5 minutes",
                "Mountain Climbers - 3 minutes",
                "Plank - 2 minutes",
                "Bodyweight Squats - 3 minutes",
                "Burpees - 2 minutes",
                "Rest - 1 minute between exercises",
                "Session 6: Active Recovery or Rest Day"
              ];
              
            const markup = generateMarkup(title, calisthenicsForStrengthAndEndurance);
            return markup;
        }
        break;
        case "advanceFullBodyWorkout":{
            const title = "Advanced Full-Body Strength Training";
            const exercise = [
                'Day 1: Upper Body',
                'Barbell Bench Press: 4 sets x 6-8 reps',
                ' Pull-Ups: 3 sets x max reps',
                'Seated Dumbbell Shoulder Press: 4 sets x 8-10 reps',
                'Bent Over Barbell Rows: 3 sets x 8-10 reps',
                'Tricep Dips: 3 sets x 10-12 reps',
                '10 burpees',
                '30 seconds of jump rope',
                'For one workout, repeat this routine three times, resting for 30 seconds between each exercise and 3 minutes in between each repetition.',
                'For Advance workout, do these as many as possible.',
                'Day 2: Upper Body',
                "Back Squats - 4 sets x 6-8 reps",
                "Deadlifts - 4 sets x 6-8 reps",
                "Walking Lunges with Dumbbells - 3 sets x 12 steps per leg",
                "Leg Press - 3 sets x 10-12 reps",
                "Seated or Standing Calf Raises - 4 sets x 12-15 reps",
                "Day 3: Rest or Active Recovery",
                "Day 4: Push Day",
                "Overhead Barbell Press - 4 sets x 8-10 reps",
                "Incline Dumbbell Bench Press - 3 sets x 8-10 reps",
                "Chest Flyes - 3 sets x 12-15 reps",
                "Tricep Kickbacks - 3 sets x 12-15 reps",
                "Plank Variations - 3 sets x 60 seconds",
              
                "Day 5: Pull Day",
                "Barbell Rows - 4 sets x 8-10 reps",
                "Lat Pulldowns - 3 sets x 10-12 reps",
                "Face Pulls - 3 sets x 12-15 reps",
                "Hammer Curls - 3 sets x 10-12 reps per arm",
                "Hanging Leg Raises - 3 sets x 15-20 reps",
              
                "Day 6: Legs and Core",
                "Front Squats - 4 sets x 8-10 reps",
                "Romanian Deadlifts - 3 sets x 10-12 reps",
                "Leg Extensions - 3 sets x 12-15 reps",
                "Russian Twists - 3 sets x 20 reps (10 per side)",
                "Hollow Body Holds - 3 sets x 30 seconds",
            ];
            const markup = generateMarkup(title, exercise);
            return markup;
        }
        break;
        case "powerliftingWorkout":{
            const title = "Powerlifting Basics for Muscle Growth";
            const powerliftingBasicsForMuscleGrowth = [
                "Day 1: Squat and Leg Emphasis",
                "Back Squats - 4 sets x 6-8 reps",
                "Front Squats - 3 sets x 8-10 reps",
                "Leg Press - 4 sets x 10-12 reps",
                "Bulgarian Split Squats - 3 sets x 12-15 reps per leg",
                "Calf Raises - 3 sets x 15-20 reps",
              
                "Day 2: Rest or Active Recovery",
              
                "Day 3: Bench Press and Chest Emphasis",
                "Barbell Bench Press - 4 sets x 8-10 reps",
                "Incline Dumbbell Bench Press - 3 sets x 10-12 reps",
                "Dumbbell Flyes - 3 sets x 12-15 reps",
                "Tricep Dips - 3 sets x 10-12 reps",
                "Tricep Rope Pushdowns - 3 sets x 15-20 reps",
              
                "Day 4: Deadlift and Back Emphasis",
                "Conventional Deadlifts - 4 sets x 6-8 reps",
                "Barbell Rows - 3 sets x 8-10 reps",
                "Lat Pulldowns - 3 sets x 10-12 reps",
                "Face Pulls - 3 sets x 12-15 reps",
                "Hammer Curls - 3 sets x 10-12 reps per arm",
              
                "Day 5: Rest or Active Recovery",
              
                "Day 6: Overhead Press and Shoulder Emphasis",
                "Overhead Barbell Press - 4 sets x 8-10 reps",
                "Seated Dumbbell Shoulder Press - 3 sets x 10-12 reps",
                "Lateral Raises - 3 sets x 12-15 reps",
                "Shrugs - 3 sets x 12-15 reps",
                "Barbell or Dumbbell Curl - 3 sets x 10-12 reps per arm",
            
                "Day 7: Rest or Active Recovery"
              ];
            const markup = generateMarkup(title, powerliftingBasicsForMuscleGrowth);
            return markup;
        }
        break;
        case "yogaWorkout":{
            const title = "Yoga for Relaxation and Flexibility";
            const yogaForRelaxationAndFlexibility = [
                "Session 1: Gentle Flow",
                "Child's Pose - 3 minutes",
                "Cat-Cow Stretch - 5 rounds",
                "Downward-Facing Dog - 1 minute",
                "Forward Fold - 3 minutes",
                "Seated Forward Bend - 3 minutes",
                "Puppy Pose - 2 minutes",
                "Savasana (Corpse Pose) - 5 minutes",
              
                'Session 2: Hip Opening',
                "Pigeon Pose - 2 minutes per leg",
                "Butterfly Pose - 3 minutes",
                "Lizard Pose - 2 minutes per leg",
                "Happy Baby Pose - 2 minutes",
                "Seated Wide-Legged Forward Bend - 3 minutes",
                "Thread the Needle Pose - 2 minutes per side",
                "Savasana - 5 minutes",
              
                'Session 3: Balance and Flexibility',
                "Tree Pose - 2 minutes per leg",
                "Warrior II Pose - 1 minute per side",
                "Extended Triangle Pose - 1 minute per side",
                "Chair Pose - 2 minutes",
                "Standing Forward Fold - 2 minutes",
                "Bridge Pose - 3 minutes",
                "Savasana - 5 minutes",
              
                'Session 4: Restorative Yoga',
                "Supported Child's Pose - 5 minutes",
                "Legs Up the Wall Pose - 7 minutes",
                "Reclining Bound Angle Pose - 5 minutes",
                "Supported Shoulderstand - 5 minutes",
                "Corpse Pose with Bolster - 10 minutes",
              
                'Session 5: Deep Stretch',
                "Extended Puppy Pose - 3 minutes",
                "Dragon Pose - 2 minutes per leg",
                "Wide-Legged Forward Bend - 3 minutes",
                "Seated Twist - 2 minutes per side",
                "Garland Pose - 3 minutes",
                "Savasana - 5 minutes",
              ];
              
            const markup = generateMarkup(title, yogaForRelaxationAndFlexibility);
            return markup;
        }
        break;
        case "cardioWorkout":{
            const title = "Express Cardio for Busy Schedules";
            const expressCardioForBusySchedules = [
                "Session 1: High-Intensity Interval Training (HIIT)",
                "Jumping Jacks - 1 minute",
                "High Knees - 1 minute",
                "Burpees - 1 minute",
                "Mountain Climbers - 1 minute",
                "Sprint in Place - 1 minute",
                "Rest - 1 minute (or active rest like jogging in place)",
                "Repeat the circuit 2 more times",
              
                "Session 2: Quick Cardio Blast",
                "Jump Rope - 3 minutes",
                "Box Jumps (or Step-Ups) - 2 minutes",
                "Squat Jumps - 1 minute",
                "Lunges - 1 minute per leg",
                "Plank Jacks - 1 minute",
                "Rest - 1 minute (or active rest like jogging in place)",
                "Repeat the circuit 1 more time",
              
                "Session 3: Tabata Cardio",
                "20 seconds Jump Squats, 10 seconds rest - 4 sets",
                "20 seconds High Knees, 10 seconds rest - 4 sets",
                "20 seconds Burpees, 10 seconds rest - 4 sets",
                "20 seconds Mountain Climbers, 10 seconds rest - 4 sets",
              
                "Session 4: Cardio Pyramid",
                "30 seconds Jumping Jacks, 30 seconds rest",
                "45 seconds Sprint in Place, 30 seconds rest",
                "1 minute High Knees, 30 seconds rest",
                "45 seconds Burpees, 30 seconds rest",
                "30 seconds Mountain Climbers, 30 seconds rest",
                "Repeat the pyramid in reverse order",
              
                "Session 5: Quick Cardio Mix",
                "Run in Place - 2 minutes",
                "Jumping Jacks - 1 minute",
                "Speed Skaters - 1 minute",
                "Butt Kicks - 1 minute",
                "Plank to Alternating Toe Touches - 1 minute",
                "Rest - 1 minute (or active rest like jogging in place)",
                "Repeat the circuit 1 more time",
              ];
              
            const markup = generateMarkup(title, expressCardioForBusySchedules);
            return markup;
        }
    }
}



closeOverlayButton.addEventListener('click', (event) => {
    overlayContainer.style.visibility = 'hidden';
    const childToRemove = document.getElementById('workout-plan');
    if (childToRemove) {
      childToRemove.remove();
    }
});

