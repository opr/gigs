<div class="artist-form">
    <h2 class="artist-form__title">Add An Artist</h2>
    <form action="{{ url('artist') }}" class="artist-form__form" method="post">
        {{ csrf_field() }}
        @include('common.errors')
        <label for="artist-form__name" class="hidden-label">Title of artist</label>
        <input type="text" name="name" class="input --text artist-form__input" id="artist-form__name">
    </form>
</div>