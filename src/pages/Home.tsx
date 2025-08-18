import galaxyMitchell from '../assets/galaxyMe.png';

const Home = () => {
    return (
        <>
            <img
                src={galaxyMitchell}
                className="galaxy-mitchell"
                alt="Galaxy Mitchell"
                style={{
                    width: '50%',
                    height: 'auto',
                    verticalAlign: 'middle',
                    justifyContent: 'center',
                }}
            />
            <div className="min-h-screen p-8">
                <h1 className="text-4xl font-bold mb-6">Welcome</h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg mb-4">
                        Welcome to my personal website! I'm Mitchell Bylak.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
