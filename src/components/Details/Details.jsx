import styles from './Details.module.scss';

const Details = () => {
    return (
        <div className={styles.profile}>
            <h1>Personal Details</h1>
            <p>Update your details.</p>
            <form>
                <div>
                    <label>Name:
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
                    <button>edit</button>
                </div>
            </form>
        </div>
    );
};

export default Details;
