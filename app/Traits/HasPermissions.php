<?php

namespace App\Traits;

use App\Permission;

trait HasPermissions
{
    public function hasPermission(...$permissions)
    {
        return $this->permissions()->where('slug', $permissions)->count();
    }

    public function hasPermissionTo(...$permissions)
    {
        return $this->permissions()->whereIn('slug', $permissions)->count() ||
            $this->roles()->whereHas('permissions', function ($query) use ($permissions) {
                $query->whereIn('slug', $permissions);
            })->count();
    }

    public function givePermissionTo(...$permissions)
    {
        return $this->permissions()->attach($permissions);
    }

    public function setPermissionsTo(...$permissions)
    {
        return $this->permissions()->sync($permissions);
    }

    public function detachPermissions(...$permissions)
    {
        return $this->permissions()->detach($permissions);
    }
}
