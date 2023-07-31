<?php

namespace Tests\Unit;

use App\Notifications\UserOTPNotification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = $this->signIn();

        $this->assertCount(1, $this->user::all());

    }
}
