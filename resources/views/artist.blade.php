@extends('layouts.app')

@section('content')

    @include('components.header')


    @if($artist->name)
        @include('components.cover-photo')
    @endif

    @include('components.artist-data-container')

@endsection