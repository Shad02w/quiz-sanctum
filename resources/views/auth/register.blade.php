@extends('layouts.app')

@section('title')
    Register
@endsection

@section('content')
    <div class="h-full dark:bg-gray-900 dark:text-white">
        <div class="h-full container mx-auto px-4 flex justify-center items-center">
            <div class="w-64 md:w-72 flex flex-col items-center">
                <h1 class="text-2xl">Create your account</h1>
                <form class="w-full" method="post" action="{{route('register')}}">
                    @csrf
                    <label for="name"></label>
                    <input class="my-input focus:border-0 mt-6" name="name" type="text" placeholder="name"
                           id="name" value="{{old('name')}}"/>
                    @error('name')
                    <div class="text-red-500 mt-2 text-sm ">
                        {{$message}}
                    </div>
                    @enderror

                    <label for="username"></label>
                    <input class="my-input focus:border-0 mt-6" name="username" type="text" placeholder="username"
                           id="username" value="{{old('username')}}"/>
                    @error('username')
                    <div class="text-red-500 mt-2 text-sm ">
                        {{$message}}
                    </div>
                    @enderror

                    <label for="email"></label>
                    <input class="my-input focus:border-0 mt-6" name="email" type="email" placeholder="email"
                           id="email" value="{{old('email')}}"/>
                    @error('email')
                    <div class="text-red-500 mt-2 text-sm ">
                        {{$message}}
                    </div>
                    @enderror

                    <label for="password"></label>
                    <input class="my-input focus:border-0 mt-6" name="password" type="password"
                           placeholder="choose a password"
                           id="password"/>
                    @error('password')
                    <div class="text-red-500 mt-2 text-sm ">
                        {{$message}}
                    </div>
                    @enderror

                    <label for="password_confirmation"></label>
                    <input class="my-input focus:border-0 mt-6" name="password_confirmation" type="password"
                           placeholder="enter password again"
                           id="password_confirmation"/>
                    @error('password_confirmation')
                    <div class="text-red-500 mt-2 text-sm ">
                        {{$message}}
                    </div>
                    @enderror

                    <input class="btn-red w-full mt-6" type="submit" value="Sign up"/>
                </form>
            </div>
        </div>
    </div>
@endsection
