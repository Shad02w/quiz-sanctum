@component('mail::layout')
{{-- Header --}}
@slot ('header')
@component('mail::header', ['url' => config('app.url')])
<img src="{{ asset('images/digiatdigi-logo.svg') }}" width="200" alt="Company logo" />
@endcomponent
@endslot

<div align='center' style="font-weight: 500">
    Show your QR code to win the prizes.
</div>
<div align='center'>
    <img style="text-align:center" src='{{ asset('images/github_qr.svg') }}' alt='QR code'/>
</div>

@component('mail::button', ['url' => 'https://digiatdigi.com'])
Learn More
@endcomponent

{{-- Subcopy --}}
@slot('subcopy')
@component('mail::subcopy')
<!-- subcopy -->
@endcomponent
@endslot

{{-- Footer --}}
@slot ('footer')
@component('mail::footer')
This email is sent by Digi@Digi
@endcomponent
@endslot
@endcomponent