<!doctype html>
<html lang="en" class="min-h-full">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name='csrf-token' content='{{ csrf_token() }}'>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <script>
        const isDarkMode = () => {
            const local = localStorage.getItem('theme')
            if (local)
                return local === 'dark' ? true : false
            else
                return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        if (isDarkMode()) {
            document.documentElement.classList.add('theme-dark')
        }

    </script>
    <title>Dashboard - Quiz</title>
</head>

<body class="min-h-full dark:bg-gray-900 dark:text-white">
    <div id="root"></div>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/index.js') }}"></script>
</body>

</html>
