const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Services = require("./model/services.model");

dotenv.config();

const servicesData = [
    {
        name: "Free Wi-Fi",
        description: "High-speed wireless internet throughout the hotel.",
        selected: true,
        image_url: "https://example.com/images/services/wifi.jpg"
    },
    {
        name: "Room Service",
        description: "24/7 in-room dining with a selection of local and international cuisine.",
        selected: false,
        image_url: "https://example.com/images/services/room-service.jpg"
    },
    {
        name: "Swimming Pool",
        description: "Outdoor infinity pool with a view of the ocean.",
        selected: false,
        image_url: "https://example.com/images/services/pool.jpg"
    },
    {
        name: "Spa & Wellness",
        description: "Relaxing treatments including massages, facials, and sauna access.",
        selected: false,
        image_url: "https://example.com/images/services/spa.jpg"
    },
    {
        name: "Fitness Center",
        description: "Fully equipped gym open 24/7 with personal trainers on request.",
        selected: false,
        image_url: "https://example.com/images/services/gym.jpg"
    },
    {
        name: "Business Center",
        description: "Conference rooms, computers, printers, and high-speed internet.",
        selected: false,
        image_url: "https://example.com/images/services/business.jpg"
    }
];

const seedServices = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, { 
            dbName: process.env.DB_NAME || 'Hotel' 
        });
        
        console.log("Connected to MongoDB");
        
        // Clear existing services
        await Services.deleteMany({});
        console.log("Cleared existing services");
        
        // Insert new services
        const insertedServices = await Services.insertMany(servicesData);
        console.log(`Inserted ${insertedServices.length} services`);
        
        process.exit(0);
    } catch (error) {
        console.error("Error seeding services:", error);
        process.exit(1);
    }
};

seedServices();
