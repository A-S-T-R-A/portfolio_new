import styles from "./ListItem.module.css"

function ListItem({ data }) {
    const { title, img } = data
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={img} alt="" className={styles.img} />
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default ListItem
