export const funEmojis=[
    "😃", // Happy
    "🎉", // Celebration
    "🌟", // Star/Excellent
    "🚀", // Rocket/Progress
    "🍕", // Pizza/Favorite food
    "🎮", // Video games
    "🏆", // Trophy/Achievement
    "💻", // Computer/Tech-savvy
    "🎵", // Music lover
    "📚", // Books/Reading
    "🏖️", // Beach/Travel
    "🐶", // Dog lover
    "🍦", // Ice cream/Sweets
    "⚽", // Soccer/Sports
    "🧩", // Puzzle/Problem solver
    "🎨", // Art/Creativity
    "✈️", // Travel/Adventurous
    "🌈", // Colorful/Optimistic
    "💡", // Ideas/Innovative
    "🎓", // Education/Learning
    "🧋", // Bubble tea/Trendy drink
    "🧘", // Meditation/Relaxation
    "🌻", // Nature/Love for flowers
    "🛒", // Shopping
    "📸", // Photography
    "🛌", // Sleeping
    "☕", // Coffee
    "🚲", // Biking
    "🍿", // Movie night
    "🎂", // Birthday
    "🖋️", // Writing
    "🏡", // Homebody
    "🌃", // Night owl
    "📱", // Phone addict
    "🛁", // Bath time
    "🍩", // Donuts/Sweets
    "🌧️", // Rainy days
    "🕶️", // Cool/Style
    "🍷", // Wine/Relaxation
    "🎈", // Balloons/Celebration
    "💌", // Love letters
    "🧺", // Laundry day
    "🥪", // Sandwich/Lunch
    "🚶", // Walking
    "📅", // Planner/Organized
    "🎃", // Halloween
    "🛠️", // DIY projects
    "🕹️", // Gaming
]

export const getRanddomEmoji=()=>{
    return funEmojis[Math.floor(Math.random()*funEmojis.length)]
}