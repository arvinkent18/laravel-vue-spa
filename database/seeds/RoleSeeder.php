<?php

use App\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole =  Role::create([
            'name' => 'Administrator',
            'slug' => 'administrator'
        ]);

        $userRole =  Role::create([
            'name' => 'User',
            'slug' => 'user'
        ]);
    }
}
