<article class="artist-description">
    <div class="artist-description__title">About {{$artist->name}}</div>
    <div class="artist-description__text">{{$artist->description}}&hellip;</div>

    <div class="artist-description__social-sharing">
        <a href="#" class="artist-description__social-sharing-link --twitter" aria-label="{{$artist->name}}'s twitter"></a>
        <a href="#" class="artist-description__social-sharing-link --facebook" aria-label="{{$artist->name}}'s faceboo"></a>
        <a href="#" class="artist-description__social-sharing-link --soundcloud" aria-label="{{$artist->name}}'s soundcloud"></a>
    </div>
</article>