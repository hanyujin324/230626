import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5665, 126.978), // 지도 중심 좌표
      zoom: 13, // 지도 줌 레벨
    };

    const map = new window.naver.maps.Map(
      document.getElementById('map'),
      mapOptions,
    );

    // 추가적인 지도 설정 및 마커 등을 추가할 수 있습니다.

    // 컴포넌트가 언마운트될 때 지도 이벤트 리스너를 제거합니다.
    return () => {
      window.naver.maps.Event.removeListener(map, 'resize');
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default Map;
