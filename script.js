document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        "https://images.unsplash.com/photo-1562154916-06a501ba8b76",
        "https://images.unsplash.com/photo-1567577674-1960e4c6a0a6",
        "https://images.unsplash.com/photo-1567434223-493235594e43",
        "https://images.unsplash.com/photo-1537159477726-5c7152a6bb96",
        "https://images.unsplash.com/photo-1603747980508-dc6815f482e0"
    ];

    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = ''; // Clear any existing images

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Streetwear Image';
        gallery.appendChild(img);
    });
});
