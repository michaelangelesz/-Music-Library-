import GalleryItem from './GalleryItem'

function Gallery(props: { data: any[] }){

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} data={[]} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
