import React from 'react';
import pic1 from '../../assets/image/avt4.png'
import pic2 from '../../assets/image/avt3.jpg'
import pic3 from '../../assets/image/avt4.png'
import pic4 from '../../assets/image/avt4.png'
import pic5 from '../../assets/image/avt3.jpg'

const AuthorList = () => {
    return (
        <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">List of authors</h5>
                <a href="/#" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-16 h-16 rounded-full" src={pic1} alt="author" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                    published: 300 books
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                TOP1'S Author
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-16 h-16 rounded-full" src={pic2} alt="author" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Bonnie Green
                                </p>
                                <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                    published: 210 books
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                TOP 2
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-16 h-16 rounded-full" src={pic3} alt="author" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Michael Gough
                                </p>
                                <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                    published: 180 books
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                TOP 3
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-16 h-16 rounded-full" src={pic4} alt="author" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Lana Byrd
                                </p>
                                <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                    published: 90 books
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                TOP 4
                            </div>
                        </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-16 h-16 rounded-full" src={pic5} alt="author" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Thomes Lean
                                </p>
                                <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                    published: 50 books
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                TOP 5
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AuthorList;
