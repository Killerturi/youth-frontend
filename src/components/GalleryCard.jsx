function GalleryCard({ image }) {
    return (
        <div className="gallery-card">
            <img src={image} alt="gallery" />
        </div>
    );
}

export default GalleryCard;