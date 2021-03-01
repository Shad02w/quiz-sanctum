<!doctype html>
<html lang="en" class="h-full">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <script>
        const isDarkMode = () => {
            const local = localStorage.getItem('theme')
            if (local)
                return local === 'dark' ? true : false
            else
                return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        if (isDarkMode) {
            document.documentElement.classList.add('theme-dark')
        }

    </script>
    <title>@yield('title') - Quiz</title>
</head>

<body class="h-full">
    @yield('content')
</body>

</html>
