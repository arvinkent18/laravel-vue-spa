<?php

namespace App\Actions\Auth;

use App\Role;
use App\User;

class RegisterAction
{
    public function run($request)
    {
        $role = Role::defaultRole()->first();

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $request['password']
        ]);

        $user->roles()->attach($role->id);

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }
}
