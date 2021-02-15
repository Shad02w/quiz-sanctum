@extends('layouts.app')

@section('title')
    Login
@endsection

@section('content')
    <div id="root" class="h-full dark:bg-gray-900 dark:text-white">
        <div class="container h-full flex flex-col justify-center items-center mx-auto px-4">
            <div class="w-3/4 md:w-80 rounded-md">
                <div class="flex flex-col items-center w-full mb-12">
                    <img class="w-48 md:w-64 block dark:hidden" src="{{ asset('images/digiatdigi-logo.svg') }}"
                        alt="logo of Digi@digi">
                    <img class="w-48 md:w-64 hidden dark:block" src="{{ asset('images/digiatdigi-white.svg') }}"
                        alt="logo of Digi@digi for dark mode">
                </div>
                <div class="text-lg text-gray-700 dark:text-gray-400 text-center mb-8">Log in to your account</div>
                <form class="w-full" action="{{ route('login') }}" method="post">
                    @csrf
                    <label for="username"></label>
                    <input placeholder="Username" name="username" class="my-input focus:border-0 md:text-md h-12"
                        id="username" type="text" value="{{ old('username') }}" />
                    @error('username')
                        <div class="text-sm text-red-500 mt-2">{{ $message }}</div>
                    @enderror

                    <label for="password"></label>
                    <input placeholder="Password" name="password" class="my-input focus:border-0 mt-6 md:text-md h-12"
                        id="password" type="password" />
                    @error('password')
                        <div class="text-sm text-red-500 mt-2">{{ $message }}</div>
                    @enderror

                    <input type="submit" value="Log in" class="btn-red w-full mt-6 h-12 md:text-lg" />
                    <br />
                </form>
                @if (session()->has('status'))
                    <div class="text-sm text-red-500 mt-2 mb-2">{{ session('status') }}</div>
                @endif
            </div>
        </div>
    </div>
@endsection
