// Mock data for mental health resources
// In a real application, this would fetch from actual APIs
export const getMentalHealthResources = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      title: "Understanding Anxiety: A Complete Guide",
      description: "Learn about anxiety symptoms, causes, and effective coping strategies. This comprehensive guide provides practical tools for managing anxiety in daily life.",
      url: "https://www.nhs.uk/mental-health/conditions/anxiety/",
      source: "NHS UK",
      category: "Anxiety"
    },
    {
      id: 2,
      title: "Depression: Symptoms and Support",
      description: "Recognize the signs of depression and discover available treatment options. Find professional support and resources for recovery.",
      url: "https://www.nhs.uk/mental-health/conditions/depression/",
      source: "NHS UK",
      category: "Depression"
    },
    {
      id: 3,
      title: "Stress Management Techniques",
      description: "Practical techniques for managing stress in your daily life. Learn breathing exercises, mindfulness practices, and lifestyle changes.",
      url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/mental-wellbeing-tips/",
      source: "NHS UK",
      category: "Stress"
    },
    {
      id: 4,
      title: "Building Mental Resilience",
      description: "Develop emotional strength and resilience to better cope with life's challenges. Discover strategies for building mental toughness.",
      url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/building-resilience/",
      source: "NHS UK",
      category: "Resilience"
    },
    {
      id: 5,
      title: "Sleep and Mental Health",
      description: "Understand the connection between sleep and mental wellbeing. Learn how to improve your sleep hygiene for better mental health.",
      url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/sleep-and-mental-health/",
      source: "NHS UK",
      category: "Sleep"
    },
    {
      id: 6,
      title: "Mindfulness and Meditation",
      description: "Explore mindfulness practices and meditation techniques that can help improve your mental wellbeing and reduce stress.",
      url: "https://www.nhs.uk/mental-health/self-help/tips-and-support/mindfulness/",
      source: "NHS UK",
      category: "Mindfulness"
    }
  ];
};