<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    public function reset(ResetPasswordRequest $request)
    {
        $response = $this->broker()->reset(
            $this->credentials($request),
            function ($user, $password) {
                $this->resetPassword($user, $password);
            }
        );

        return $response == Password::PASSWORD_RESET
            ? $this->sendResetResponse($response)
            : $this->sendResetFailedResponse($response);
    }

    protected function resetPassword($user, $password)
    {
        $this->setUserPassword($user, $password);

        $user->setRememberToken(Str::random(60));

        $user->save();

        //event(new PasswordReset($user));
    }

    protected function credentials(ResetPasswordRequest $request)
    {
        return $request->only(
            'email',
            'password',
            'password_confirmation',
            'token'
        );
    }

    protected function setUserPassword($user, $password)
    {
        $user->password = $password;
    }

    public function broker()
    {
        return Password::broker();
    }

    protected function sendResetResponse($response)
    {
        return response()->json([
            'message' => 'Password reset success',
            'response' => $response
        ], 200);
    }

    protected function sendResetFailedResponse($response)
    {
        return response()->json([
            'message' => 'Password reset failed',
            'response' => $response
        ], 500);
    }
}
