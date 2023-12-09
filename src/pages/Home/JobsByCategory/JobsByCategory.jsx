import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';

const JobsByCategory = () => {
    const [allJobs, setAllJobs] = useState([]);


    useEffect(() => {
        fetch('https://a11-career-hunt-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])

    const onSiteJobs = allJobs.filter(job => job.category === "On Site");
    const remoteJobs = allJobs.filter(job => job.category === "Remote");
    const hybridJobs = allJobs.filter(job => job.category === "Hybrid");
    const partTimeJobs = allJobs.filter(job => job.category === "Part Time");


    return (
        <div className='flex justify-center items-center mt-12'>
            <Tabs>
                <TabList selectedTabClassName="selected-tab" className='grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center p-4 px-6 md:px-32 bg-slate-100 shadow-xl text-xs lg:text-lg'>
                    <Tab className='me-5 py-2 px-3 rounded bg-sky-600 font-bold'>On Site</Tab>
                    <Tab className='me-5 py-2 px-3 rounded bg-sky-600 font-bold'>All Jobs</Tab>
                    <Tab className='me-5 py-2 px-3 rounded bg-sky-600 font-bold'>Remote</Tab>
                    <Tab className='me-5 py-2 px-3 rounded bg-sky-600 font-bold'>Hybrid</Tab>
                    <Tab className='me-5 py-2 px-3 rounded bg-sky-600 font-bold'>Part Time</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-8 mx-auto my-20 px-2">

                        {onSiteJobs
                            ?
                            onSiteJobs.map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                            :
                            <div className="flex flex-col justify-center items-center">
                                <p className="my-16 text-center text-2xl text-pink-500 font-bold mx-auto">You have no Job To Display.</p>
                                <div className='text-center my-12'>
                                    <span className="loading loading-spinner text-primary"></span>
                                    <span className="loading loading-spinner text-secondary"></span>
                                    <span className="loading loading-spinner text-accent"></span>
                                    <span className="loading loading-spinner text-neutral"></span>
                                    <span className="loading loading-spinner text-info"></span>
                                    <span className="loading loading-spinner text-success"></span>
                                    <span className="loading loading-spinner text-warning"></span>
                                    <span className="loading loading-spinner text-error"></span>
                                </div>
                                <progress className="progress w-56"></progress>
                            </div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-8 mx-auto my-20 px-2">

                        {allJobs
                            ?
                            allJobs.map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                            :
                            <div className="flex flex-col justify-center items-center">
                                <p className="my-16 text-center text-2xl text-pink-500 font-bold mx-auto">You have no Job To Display.</p>
                                <div className='text-center my-12'>
                                    <span className="loading loading-spinner text-primary"></span>
                                    <span className="loading loading-spinner text-secondary"></span>
                                    <span className="loading loading-spinner text-accent"></span>
                                    <span className="loading loading-spinner text-neutral"></span>
                                    <span className="loading loading-spinner text-info"></span>
                                    <span className="loading loading-spinner text-success"></span>
                                    <span className="loading loading-spinner text-warning"></span>
                                    <span className="loading loading-spinner text-error"></span>
                                </div>
                                <progress className="progress w-56"></progress>
                            </div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-8 mx-auto my-20 px-2">

                        {remoteJobs
                            ?
                            remoteJobs.map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                            :
                            <div className="flex flex-col justify-center items-center">
                                <p className="my-16 text-center text-2xl text-pink-500 font-bold mx-auto">You have no Job To Display.</p>
                                <div className='text-center my-12'>
                                    <span className="loading loading-spinner text-primary"></span>
                                    <span className="loading loading-spinner text-secondary"></span>
                                    <span className="loading loading-spinner text-accent"></span>
                                    <span className="loading loading-spinner text-neutral"></span>
                                    <span className="loading loading-spinner text-info"></span>
                                    <span className="loading loading-spinner text-success"></span>
                                    <span className="loading loading-spinner text-warning"></span>
                                    <span className="loading loading-spinner text-error"></span>
                                </div>
                                <progress className="progress w-56"></progress>
                            </div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-8 mx-auto my-20 px-2">

                        {hybridJobs
                            ?
                            hybridJobs.map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                            :
                            <div className="flex flex-col justify-center items-center">
                                <p className="my-16 text-center text-2xl text-pink-500 font-bold mx-auto">You have no Job To Display.</p>
                                <div className='text-center my-12'>
                                    <span className="loading loading-spinner text-primary"></span>
                                    <span className="loading loading-spinner text-secondary"></span>
                                    <span className="loading loading-spinner text-accent"></span>
                                    <span className="loading loading-spinner text-neutral"></span>
                                    <span className="loading loading-spinner text-info"></span>
                                    <span className="loading loading-spinner text-success"></span>
                                    <span className="loading loading-spinner text-warning"></span>
                                    <span className="loading loading-spinner text-error"></span>
                                </div>
                                <progress className="progress w-56"></progress>
                            </div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-8 mx-auto my-20 px-2">

                        {partTimeJobs
                            ?
                            partTimeJobs.map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                            :
                            <div className="flex flex-col justify-center items-center">
                                <p className="my-16 text-center text-2xl text-pink-500 font-bold mx-auto">You have no Job To Display.</p>
                                <div className='text-center my-12'>
                                    <span className="loading loading-spinner text-primary"></span>
                                    <span className="loading loading-spinner text-secondary"></span>
                                    <span className="loading loading-spinner text-accent"></span>
                                    <span className="loading loading-spinner text-neutral"></span>
                                    <span className="loading loading-spinner text-info"></span>
                                    <span className="loading loading-spinner text-success"></span>
                                    <span className="loading loading-spinner text-warning"></span>
                                    <span className="loading loading-spinner text-error"></span>
                                </div>
                                <progress className="progress w-56"></progress>
                            </div>
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobsByCategory;