import styles from './Details.module.scss';

const Details = () => {
    return (
        <div className={styles.profile}>
            <h1>Personal Details</h1>
            <p>Update your details.</p>
            <form>
                <div>
                    <label>Name:
                        <p>Uzochukwu Cecilia Oloh</p>
                    </label>
                    <button>edit</button>
                </div>
                <div>
                    <label>DisplayName:
                    </label>
                    <button>edit</button>
                </div>
                <div>
                    <label>Email Address:
                    </label>
                    <p>hellooo</p>
                    <button>edit</button>
                </div>
            </form>
        </div>
    );
};

export default Details;
