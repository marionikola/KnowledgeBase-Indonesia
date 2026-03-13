@echo off
setlocal enabledelayedexpansion
for /d %%P in (*) do (
    if not "%%P"=="_docs" (
        if exist "%%P\Kabupaten" (
            pushd "%%P\Kabupaten"
            for /d %%K in (*) do (
                set "name=%%K"
                set "lower=!name:A=a!"
                set "lower=!lower:B=b!"
                set "lower=!lower:C=c!"
                set "lower=!lower:D=d!"
                set "lower=!lower:E=e!"
                set "lower=!lower:F=f!"
                set "lower=!lower:G=g!"
                set "lower=!lower:H=h!"
                set "lower=!lower:I=i!"
                set "lower=!lower:J=j!"
                set "lower=!lower:K=k!"
                set "lower=!lower:L=l!"
                set "lower=!lower:M=m!"
                set "lower=!lower:N=n!"
                set "lower=!lower:O=o!"
                set "lower=!lower:P=p!"
                set "lower=!lower:Q=q!"
                set "lower=!lower:R=r!"
                set "lower=!lower:S=s!"
                set "lower=!lower:T=t!"
                set "lower=!lower:U=u!"
                set "lower=!lower:V=v!"
                set "lower=!lower:W=w!"
                set "lower=!lower:X=x!"
                set "lower=!lower:Y=y!"
                set "lower=!lower:Z=z!"
                if not "!name!"=="!lower!" (
                    ren "!name!" "!lower!"
                    echo Renamed: !name! -> !lower!
                )
            )
            popd
        )
        if exist "%%P\Kota" (
            pushd "%%P\Kota"
            for /d %%K in (*) do (
                set "name=%%K"
                set "lower=!name:A=a!"
                set "lower=!lower:B=b!"
                set "lower=!lower:C=c!"
                set "lower=!lower:D=d!"
                set "lower=!lower:E=e!"
                set "lower=!lower:F=f!"
                set "lower=!lower:G=g!"
                set "lower=!lower:H=h!"
                set "lower=!lower:I=i!"
                set "lower=!lower:J=j!"
                set "lower=!lower:K=k!"
                set "lower=!lower:L=l!"
                set "lower=!lower:M=m!"
                set "lower=!lower:N=n!"
                set "lower=!lower:O=o!"
                set "lower=!lower:P=p!"
                set "lower=!lower:Q=q!"
                set "lower=!lower:R=r!"
                set "lower=!lower:S=s!"
                set "lower=!lower:T=t!"
                set "lower=!lower:U=u!"
                set "lower=!lower:V=v!"
                set "lower=!lower:W=w!"
                set "lower=!lower:X=x!"
                set "lower=!lower:Y=y!"
                set "lower=!lower:Z=z!"
                if not "!name!"=="!lower!" (
                    ren "!name!" "!lower!"
                    echo Renamed: !name! -> !lower!
                )
            )
            popd
        )
    )
)
endlocal