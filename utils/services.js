const JOB = require("../models/job");

async function getUniqueLocations() {
  try {
    const jobs = await JOB.find().select("location");
    // const uniqueCountries = new Set();
    // jobs.forEach((job) => uniqueCountries.add(job.location));
    // return Array.from(uniqueCountries);
    // const uniqueCountries = new Set(jobs.map((j) => j.location));
    console.log(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}
getUniqueLocations();
