using Client.Config;
using Client.Models.Courses;
using Client.Services;
using Microsoft.AspNetCore.Components;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace Client.Pages.Courses
{
  public partial class Index
    {
        public bool IsLoading { get; set; }
        public const bool IsDebug =
            #if DEBUG
            true
            #else
            false
            #endif
            ;

        protected override void OnAfterRender(bool firstRender)
        {
            if (firstRender)
            {
                AppState.Reset();
            }
        }
    }
}