import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
} from "../utils";

export const navLists = ["Features", "Diet Plan", "Workout Plans", "Blog", "Contact US"];

export const hightlightsSlides = [
    {
        id: 1,
        textLists: [
            "Effortless Workout Logging",
            "Monitor your progress over time.",
            "Organize and track your fitness",
        ],
        video: highlightFirstVideo,
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: ["Accurate Rep Counting", "Perfect for maintaining consistency"],
        video: highlightSecondVideo,
        videoDuration: 4,
    },
    {
        id: 3,
        textLists: [
            "Calorie Calculation Made Easy",
            "Calculate calories burned during your workouts",
            "Precise data to keep you informed and motivated.",
        ],
        video: highlightThirdVideo,
        videoDuration: 4,
    },
    {
        id: 4,
        textLists: ["AI-powered personalized workout plan", "Exercises to your fitness level, goals, and progress"],
        video: highlightFourthVideo,
        videoDuration: 4,
    },
];

export const models = [
    {
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
    },
    {
        id: 2,
        title: "iPhone 15 Pro in Blue Titanium",
        color: ["#53596E", "#6395ff", "#21242e"],
        img: blueImg,
    },
    {
        id: 3,
        title: "iPhone 15 Pro in White Titanium",
        color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
        img: whiteImg,
    },
    {
        id: 4,
        title: "iPhone 15 Pro in Black Titanium",
        color: ["#454749", "#3b3b3b", "#181819"],
        img: blackImg,
    },
];

export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
];

export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
];