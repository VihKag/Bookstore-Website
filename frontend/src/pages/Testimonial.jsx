import React from 'react';
import Header from '../components/Header/Header';
import Footer2 from '../components/footer2/footer2';
import avt from "../assets/image/phuc.png"
import avt2 from "../assets/image/qui.jpg"
import avt3 from "../assets/image/avt3.jpg"
import avt4 from "../assets/image/avt4.png"

const Testimonial = () => {
    return (
        <div>
            <Header />
            <h1 className='text-center text-4xl font-bold mt-4'>TESTIMONIALS</h1>
            <div className="grid mb-8 mt-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                {/* Testimonial 1 */}
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    {/* Testimonial content */}
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Member</h3>
                        <p className="my-4">If you care for your time, I hands down would go with this. On the way to success, there is no trace of lazy men. "</p>
                    </blockquote>
                    {/* Testimonial author */}
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src={avt} alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Thái Hoàng Phúc</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">UI Developer & Frontend </div>
                        </div>
                    </figcaption>
                </figure>

                {/* Testimonial 2 */}
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Member</h3>
                        <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src={avt2} alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Phạm Nguyễn Phú Quí</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Frontend & Backend</div>
                        </div>
                    </figcaption>
                </figure>

                {/* Testimonial 3 */}
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Member</h3>
                        <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src={avt3} alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Nguyễn Vinh Khang</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Frontend & Backend</div>
                        </div>
                    </figcaption>
                </figure>

                {/* Testimonial 4 */}
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mentor</h3>
                        <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src={avt4} alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Mr Hoàng Công Trình</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Teacher</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <Footer2 />
        </div>
    );
};

export default Testimonial;
