<div class="gig-form">
    <h2 class="gig-form__title">Add A Tour</h2>
    <form action="{{ url('gig') }}" class="gig-form__form" method="post">
        {{ csrf_field() }}
        @include('common.errors')
        <label for="gig-form__name" class="hidden-label">Title of gig</label>
        <input type="text" name="name" class="input --text gig-form__input" id="gig-form__name">
    </form>
</div>