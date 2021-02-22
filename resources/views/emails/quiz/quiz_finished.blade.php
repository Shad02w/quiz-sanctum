

@component('mail::message')
## Show your QR code to win the prizes.
<div align='center'>
<img style="text-align:center" src='{{ asset('images/github_qr.svg') }}' alt='QR code'/>
</div>

@component('mail::button', ['url' => 'https://digiatdigi.com'])
Learn More
@endcomponent
Thanks
@endcomponent

