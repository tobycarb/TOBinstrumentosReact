const Loader = () => {
    let circleCommonClasses = 'h-6 w-6 bg-current rounded-full';

    return (
        <div className='flex justify-center m-20'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Loader;