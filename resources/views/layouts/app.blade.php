<!DOCTYPE html>
<html lang="en">
<head>
    <title>Gigs</title>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('/assets/styles/css/bloc.min.css') }}" />
</head>

<body>

<div class="container">
    <nav class="navbar navbar-default">
    </nav>
</div>

@yield('content')
<script src="{{ URL::asset('/assets/js/dist/bloc.js') }}"></script>
<script src="{{ URL::asset('/assets/js/dist/bundle.js') }}"></script>
</body>
</html>