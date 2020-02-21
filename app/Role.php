<?php

namespace App;

use App\Traits\HasPermissions;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasPermissions;

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_role');
    }

    public function hasPermissionTo(...$permissions)
    {
        return $this->permissions()->whereIn('slug', $permissions)->count();
    }
}
